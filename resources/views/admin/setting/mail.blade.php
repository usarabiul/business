@extends(adminTheme().'layouts.app') 
@section('title')
<title>{{websiteTitle(ucfirst($type).' Setting')}}</title>
@endsection 
@push('css')
<style type="text/css"></style>
@endpush 
@section('contents')

<div class="page-titles">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard </a></li>
        <li class="breadcrumb-item active"><a href="javascript:void(0)">{{ucfirst($type)}} Setting </a></li>
    </ol>
</div>
@include(adminTheme().'alerts')
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header" style="border-bottom: 1px solid #e3ebf3;">
                <h4 class="card-title">Mail Setting</h4>
            </div>
            <div class="card-content">
                <div class="card-body">
                <form action="{{route('admin.settingUpdate',$type)}}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                            <label class="form-label">Mail Form Address </label>
                            <input type="text" name="mail_from_address" value="{{ $general->mail_from_address }}" placeholder="Mail From Address" class="form-control  {{$errors->has('mail_from_address')?'error':''}}" />
                            @if ($errors->has('mail_from_address'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('mail_from_address') }}</p>
                            @endif
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                            <label class="form-label">Mail Form Name</label>
                            <input type="text" name="mail_from_name" value="{{ $general->mail_from_name }}" placeholder="Mail From Name" class="form-control  {{$errors->has('mail_from_name')?'error':''}}" />
                            @if ($errors->has('mail_from_name'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('mail_from_name') }}</p>
                            @endif
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                            <label class="form-label">Mail Driver</label>
                            <select name="mail_driver" class="form-control  {{$errors->has('mail_driver')?'error':''}}">
                                <option value="smtp" {{$general->mail_driver=='smtp'?'selected':''}}>SMTP</option>
                                <option value="mailgun" {{$general->mail_driver=='mailgun'?'selected':''}}>Mailgun</option>
                                <option value="sendmail" {{$general->mail_driver=='sendmail'?'selected':''}}>Sendmail</option>
                                <option value="mail" {{$general->mail_driver=='mail'?'selected':''}}>Mail</option>
                            </select>
                            @if ($errors->has('mail_driver'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('mail_driver') }}</p>
                            @endif
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                            <label class="form-label">Mail Host</label>
                            <input type="text" name="mail_host" value="{{ $general->mail_host }}" placeholder="Mail Host" class="form-control  {{$errors->has('mail_host')?'error':''}}" />
                            @if ($errors->has('mail_host'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('mail_host') }}</p>
                            @endif
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                            <label class="form-label">Mail Port</label>
                            <input type="text" name="mail_port" value="{{ $general->mail_port }}" placeholder="Mail Port" class="form-control  {{$errors->has('mail_port')?'error':''}}" />
                            @if ($errors->has('mail_port'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('mail_port') }}</p>
                            @endif
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                            <label class="form-label">Mail Encryption</label>
                            <select name="mail_encryption" class="form-control  {{$errors->has('mail_encryption')?'error':''}}">
                                <option value="tls" {{$general->mail_encryption=='tls'?'selected':''}}>TLS</option>
                                <option value="ssl" {{$general->mail_encryption=='ssl'?'selected':''}}>SSL</option>
                                <option value="" {{$general->mail_encryption==null?'selected':''}}>Null</option>
                            </select>
                            @if ($errors->has('mail_encryption'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('mail_encryption') }}</p>
                            @endif
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                            <label class="form-label">Mail Username</label>
                            <input type="text" name="mail_username" value="{{ $general->mail_username }}" placeholder="Mail Username  " class="form-control  {{$errors->has('mail_username')?'error':''}}" />
                            @if ($errors->has('mail_username'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('mail_username') }}</p>
                            @endif
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                            <label class="form-label">Mail Password</label>
                            <div class="input-group">
                                <input type="password" name="mail_password" value="{{$general->mail_password}}" placeholder="Mail Password" class="form-control  password {{$errors->has('mail_password')?'error':''}}" />
                                <div class="input-group-append">
                                    <span class="input-group-text showPassword"><i class="fa fa-eye-slash"></i></span>
                                </div>
                            </div>
                            @if ($errors->has('mail_password'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('mail_password') }}</p>
                            @endif
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 mb-3">
                            <label class="form-label">Author Mail <small>(use comma, for multiple Mail)</small></label>
                            <input
                                type="text"
                                name="admin_mails"
                                value="{{ $general->admin_mails }}"
                                placeholder="Author Email  (use comma, for multiple)"
                                class="form-control  {{$errors->has('admin_mails')?'error':''}}"
                            />
                            @if ($errors->has('admin_mails'))
                            <p style="color: red; margin: 0; font-size: 10px;">{{ $errors->first('admin_mails') }}</p>
                            @endif
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 mb-3">
                                <label class="form-label">Mail Status</label>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" name="mail_status" id="mail_status" {{$general->mail_status?'checked':''}}/>
                                    <label class="custom-control-label" for="mail_status">Active <small>(Mail System Active)</small></label>
                                </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 mb-3">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <th>Action For</th>
                                        <th>Status <small>(Send Mail status)</small></th>
                                    </tr>
                                    <tr>
                                        <th>Registration</th>
                                        <td>
                                            <label style="cursor: pointer;"> <input type="checkbox" name="register_mail_user" {{$general->register_mail_user?'checked':''}} /> User </label>
                                            <label style="cursor: pointer;"> <input type="checkbox" name="register_mail_author" {{$general->register_mail_author?'checked':''}} /> Author </label>
                                            <b> Account Create After Send Mail </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Registration Verify</th>
                                        <td>
                                            <label style="cursor: pointer;"> <input type="checkbox" name="register_verify_mail_user" {{$general->register_verify_mail_user?'checked':''}} /> User </label>
                                            <b> Registration Verify Request After Send Mail </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Forget Password</th>
                                        <td>
                                            <label style="cursor: pointer;"> <input type="checkbox" name="forget_password_mail_user" {{$general->forget_password_mail_user?'checked':''}} /> User </label>
                                            <b> Forget Password Request After Send Mail </b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 mb-1">
                            <button type="submit" class="btn btn-primary btn-md rounded-0 mr-sm-1 mb-1 mb-sm-0">Save changes</button>
                        </div>
                    </div>
                    </form>
                    <div class="row">
                        <div class="col-md-12">
                            <form action="{{route('admin.settingUpdate','send-testing-mail')}}" method="post">
                            @csrf
                            <h4 style="color: #ff7e93;font-weight: bold;">Send Testing Mail</h4>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                        <label class="form-label">Mail Type</label>
                                        <select class="form-control" name="mail_type" required="">
                                            <option value="">Select Mail Type</option>
                                            <option value="Register Mail">Register Mail</option>
                                            <option value="Contact Mail">Contact Mail</option>
                                        </select>
                                        @if ($errors->has('mail_type'))
                                        <p style="color: red; margin: 0;">{{ $errors->first('mail_type') }}</p>
                                        @endif
                                </div>
                                <div class="col-md-4 mb-3">
                                    
                                        <label class="form-label">Send Mail Address</label>
                                        <input type="email" class="form-control" name="mail_address" value="{{old('mail_address')?:$general->mail_from_address}}" required="">
                                        @if ($errors->has('mail_address'))
                                        <p style="color: red; margin: 0;">{{ $errors->first('mail_address') }}</p>
                                        @endif
                                </div>
                                <div class="col-md-4 mb-3">
                                    <button type="submit" class="btn btn-block btn-md btn-info"><i class="fa fa-paper-plane"></i> Send Mail</button>
                                </div>
                            </div>
                            </form>
                            <form action="{{route('admin.setting','preview-mail')}}">
                            <h4 style="color: #ff7e93;font-weight: bold;">Mail Preview</h4>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    
                                        <label class="form-label">Mail Type</label>
                                        <select class="form-control" name="template" required="">
                                            <option value="">Select Mail Type</option>
                                            <option value="Register Mail">Register Mail</option>
                                            <option value="Contact Mail">Contact Mail</option>
                                        </select>
                                        @if ($errors->has('mail_type'))
                                        <p style="color: red; margin: 0;">{{ $errors->first('mail_type') }}</p>
                                        @endif
                                </div>
                                <div class="col-md-4 mb-3">
                                    <br>
                                    <button type="submit" class="btn btn-block btn-md btn-success"><i class="fa fa-eye"></i> Preview Mail</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>

@endsection 
@push('js') 

@endpush
