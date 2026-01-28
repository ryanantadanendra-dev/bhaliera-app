<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Mews\Purifier\Facades\Purifier;

class BlogController extends Controller
{
    //

    public function getBlogs() {
        $blogs = Blog::all();

        return response()->json([
            'blogs' => $blogs
        ]);
    }

    public function addBlog(Request $request) {
        $validate = $request->validate([
            'title' => 'required|max:100',
            'subtitle' => 'required|max:255',
            'content' => 'required',
            'image' => 'image|mimes:jpg,png,jpeg|max:2000'
        ]);

        // create slug
        $slug = Str::slug($request->title);

        if($request->hasFile('image')) {
            // upload image to images folder
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }

        $cleanContent = Purifier::clean($request->content, [
            'HTML.Allowed' => 'p,strong,em,ul,ol,li,a[href],br,h2,h3'
        ]);

        $blog = Blog::create([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'content' => $cleanContent,
            'image' => 'images/'.$imageName,
            'slug' => $slug
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Blog created successfully',
            'data' => $blog
        ], 201);
    }

    public function editBlog(Request $request, $id) {
        $blog = Blog::find($id);

        $validate = $request->validate([
            'title' => 'required|max:100',
            'subtitle' => 'required|max:255',
            'content' => 'required',
        ]);

        // create slug
        $slug = Str::slug($request->title);

        $blog->update([
            'title' => $validate['title'],
            'subtitle' => $validate['subtitle'],
            'content' => $validate['content'],
            'slug' => $slug
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Blog updated successfully',
            'data' => $blog
        ], 201);
    }

    public function deleteBlog($id) {
        $blog = Blog::findOrFail($id);

        if($blog) {
            // FIND IMAGE PATH AND DELETE IMAGE IN STORAGE
            Storage::delete('public/images/'. $blog->image);

            // DELETE BLOG DATA
            $blog->delete();

            return response()->json([
                'success' => true,
                'message' => 'Blog deleted successfully',
                'data' => $blog
            ], 201);
        }
    }

    public function updateImage(Request $request, $id) {
        $blog = Blog::findOrFail($id);

        if(Storage::disk('public')->exists($blog->image)) {
            Storage::disk('public')->delete($blog->image);
        }

        $validate = $request->validate([
            'image' => 'image|mimes:jpeg,jpg,png|max:2000'
        ]);

        if($request->hasFile('image')) {
            // upload image to images folder
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }

        $blog->update([
            'image' => 'images/'.$imageName
        ]);

        return response()->json([
                'success' => true,
                'message' => 'Blog deleted successfully',
                'data' => $blog->image
        ], 201);
    }

    public function latest(){
        $blogs = Blog::latest()->take(4)->get();

        return response()->json([
                'data' => $blogs
        ], 201);
    }
}
