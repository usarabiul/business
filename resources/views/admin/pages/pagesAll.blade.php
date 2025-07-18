@extends(adminTheme().'layouts.app') 
@section('title')
<title>{{websiteTitle('Pages List')}}</title>
@endsection 
@push('css')
<style type="text/css">
    .table:not(.table-bordered) thead th
    {
        border-top: none;
        background: #f5f5f5;
    }
</style>
@endpush 
@section('contents')
<div class="row">
    <div class="col-md-6">
        <div class="page-titles">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard </a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Pages List</a></li>
            </ol>
        </div>
    </div>
    <div class="col-md-6">
        <div class="text-start text-md-end mb-3">
            <a href="{{route('admin.pagesAction','create')}}" class="btn btn-info"><i class="fa-solid fa-plus"></i> Add Page</a>
            <a href="{{route('admin.pages')}}" class="btn btn-success">
                <i class="fa-solid fa-rotate"></i>
            </a>
        </div>
    </div>
</div>


@include(adminTheme().'alerts')

<div class="card">
    <div class="card-header" style="border-bottom: 1px solid #e3ebf3;">
        <h4 class="card-title">Pages List</h4>
    </div>
    <div class="card-content">
        <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <form action="{{route('admin.pages')}}">
                        <div class="input-group mb-3">
                            <input type="text" name="search" value="{{request()->search?request()->search:''}}" placeholder="Page Name" class="form-control {{$errors->has('search')?'error':''}}" />
                            <button type="submit" class="btn btn-success btn-sm rounded-0">Search</button>
                        </div>
                        </form>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-6">
                        <ul class="statuslist mt-1 mb-3">
                            <li><a href="{{route('admin.pages')}}">All ({{$totals->total}})</a></li>
                            <li><a href="{{route('admin.pages',['status'=>'active'])}}">Active ({{$totals->active}})</a></li>
                            <li><a href="{{route('admin.pages',['status'=>'inactive'])}}">Inactive ({{$totals->inactive}})</a></li>
                        </ul>
                    </div>
                </div>
                <div class="table-responsive" style="min-height:300px;">
                    <table class="table table-responsive-md">
                        <thead>
                            <tr>
                                <th style="min-width: 60px;">SL</th>
                                <th style="min-width: 300px;">Name</th>
                                <th style="min-width: 100px; width: 100px;">Image</th>
                                <th style="min-width: 100px; width: 100px;">Status</th>
                                <th style="min-width: 60px; width: 60px;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($pages as $i=>$page)
                            <tr>
                                <td>{{$pages->currentpage()==1?$i+1:$i+($pages->perpage()*($pages->currentpage() - 1))+1}}</td>
                                <td>
                                    <span>
                                        <a href="{{route('pageView',$page->slug?:'no-slug')}}" target="_blank">{{$page->name}}
                                        </a>
                                        @if($page->template)
                                        <span style="color: #ccc;">({{$page->template}})</span>
                                        @endif
                                        </span>
                                        <br />
                                    @if($page->fetured==true)
                                    <span><i class="fa fa-star" style="color: #1ab394;"></i></span>
                                    @endif

                                    <span style="color: #ccc;"><i class="fa fa-calendar" style="color: #1ab394;"></i> {{$page->created_at->format('d-m-Y')}}</span>
                                    <span style="color: #ccc;">
                                        <i class="fa fa-user" style="color: #1ab394;"></i>
                                        {{Str::limit($page->user?$page->user->name:'No Author',15)}}
                                    </span>
                                </td>
                                <td style="padding:0 5px;text-align: center;">
                                    <img src="{{asset($page->image())}}" style="max-width: 60px;max-height: 60px;" />
                                </td>
                                <td>
                                    @if($page->status=='active')
                                    <span class="badge badge-success">Active </span>
                                    @elseif($page->status=='inactive')
                                    <span class="badge badge-danger">Inactive </span>
                                    @else
                                    <span class="badge badge-danger">Draft </span>
                                    @endif
                                </td>
                                <td style="text-align:center;">
                                    <a href="{{route('admin.pagesAction',['edit',$page->id])}}" class="btn btn-md btn-info">
                                        Edit
                                    </a>   
                                    <!-- 
                                    //// Permission Page Delete
                                    --> 
                                    @isset(json_decode(Auth::user()->permission->permission, true)['pages']['delete'])
                                        <a href="{{route('admin.pagesAction',['delete',$page->id])}}" onclick="return confirm('Are You Want To Delete')" class="btn btn-md btn-danger">
                                        <i class="fa fa-trash"></i>
                                        </a> 
                                    @endisset
                                        <!-- 
                                    //// Permission Page Delete
                                    --> 

                                </td>
                            </tr>
                            @endforeach
                              <tr>
                                <td><strong class="text-black">01 </strong></td>
                                <td>Mr. Bobby </td>

                                <td></td>
                                <td><span class="badge light badge-success">Active </span></td>
                                <td style="text-align:center;">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-success light sharp" data-bs-toggle="dropdown">
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="javascript:void(0);">Edit </a>
                                            <a class="dropdown-item" href="javascript:void(0);">Delete </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {{$pages->links('pagination')}}
                </div>
        </div>
    </div>
</div>


@endsection @push('js') @endpush
