<!DOCTYPE html>
 <html lang="en" >
   <!-- BEGIN: Head-->
   <head>

     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <!-- CSRF Token -->
     <meta name="csrf-token" content="{{ csrf_token() }}">
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
     <meta name="description" content="" />
     <meta name="keywords" content="" />
     <meta name="author" content="NIT" />
     @yield('title')
    <link rel="apple-touch-icon" href="{{asset(general()->favicon())}}" />
    <link rel="shortcut icon" type="image/x-icon" href="{{asset(general()->favicon())}}" />
     <!-- BEGIN: Theme JS-->
    <link rel="stylesheet" href="{{asset(assetLinkAdmin().'/assets/vendor/chartist/css/chartist.min.css')}}">
    <link href="{{asset(assetLinkAdmin().'/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css')}}" rel="stylesheet">
	  <link href="{{asset(assetLinkAdmin().'/assets/vendor/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css')}}" rel="stylesheet">
    <link href="{{asset(assetLinkAdmin().'/assets/css/style.css')}}" rel="stylesheet">
	  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

    <style type="text/css">
       .card{
          height: unset;
       }
       ul.statuslist li {
            display: inline-block;
        }

        ul.statuslist li a {
            border: 1px solid #d1cece;
            padding: 3px 10px;
            border-radius: 15px;
        }
    </style>

     @stack('css')
   </head>
   <!-- END: Head-->

   <!-- BEGIN: Body-->
   <body>

        <div id="preloader">
            <div class="sk-three-bounce">
                <div class="sk-child sk-bounce1"></div>
                <div class="sk-child sk-bounce2"></div>
                <div class="sk-child sk-bounce3"></div>
            </div>
        </div>

        <div id="main-wrapper">
        
          @include(adminTheme().'layouts.header')

          @include(adminTheme().'layouts.sidebar')

          <div class="content-body">
              <!-- row -->
			        <div class="container-fluid">
                @yield('contents')
              </div>
          </div>

          @include(adminTheme().'layouts.footer')
        </div>
    
    <!-- Required vendors -->
    <script src="{{asset(assetLinkAdmin().'/assets/vendor/global/global.min.js')}}"></script>
	  <script src="{{asset(assetLinkAdmin().'/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js')}}"></script>
    <script src="{{asset(assetLinkAdmin().'/assets/vendor/bootstrap-datepicker-master/js/bootstrap-datepicker.min.js')}}"></script>
	  <script src="{{asset(assetLinkAdmin().'/assets/vendor/chart.js/Chart.bundle.min.js')}}"></script>
    <script src="{{asset(assetLinkAdmin().'/assets/js/custom.min.js')}}"></script>
	  <script src="{{asset(assetLinkAdmin().'/assets/js/deznav-init.js')}}"></script>
	
	  <!-- Chart piety plugin files -->
    <script src="{{asset(assetLinkAdmin().'/assets/vendor/peity/jquery.peity.min.js')}}"></script>
	
	  <!-- Apex Chart -->
	  <script src="{{asset(assetLinkAdmin().'/assets/vendor/apexchart/apexchart.js')}}"></script>
	
	  <!-- Dashboard 1 -->
	  <script src="{{asset(assetLinkAdmin().'/assets/js/dashboard/dashboard-1.js')}}"></script>
    
     <script type="text/javascript">
      $( function() {
              $( ".sortable" ).sortable();
              $( ".sortable" ).disableSelection();
          } );
    </script>
     <script>
      $(document).ready(function(){
          

        $('#PrintAction').on("click", function () {
            $('.PrintAreaContact').printThis();
          });

        $('#PrintAction2').on("click", function () {
            $('.PrintAreaContact2').printThis();
          });

          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });
          
          $(document).on('click','.showPassword',function(){
                $(this).toggleClass('active-show');
                if ($(this).hasClass('active-show')) {
                    $('input.password').prop('type','text');
                    $(this).empty().append('<i class="fa fa-eye"></i>');
                } else {
                    $('input.password').prop('type','password');
                    $(this).empty().append('<i class="fa fa-eye-slash"></i>');
                }
          });

          $("#division").on("change", function(){
                var id = $(this).val();
                  if(id==''){
                   $('#district').empty().append('<option value="">No District</option>');
                   $('#city').empty().append('<option value="">No City</option>');
                  }
                  var url ='{{url('geo/filter')}}' + '/'+id;
                  $.get(url,function(data){
                    $('#district').empty().append(data.geoData);
                    $('#city').empty().append('<option value="">No City</option>');
                  });   
            });

            $("#district").on("change", function(){
                var id = $(this).val();
                  if(id==''){
                   $('#city').empty().append('<option value="">No City</option>');
                  }
                  var url ='{{url('geo/filter')}}' + '/'+id;
                  $.get(url,function(data){
                    $('#city').empty().append(data.geoData);  
                  });   
            });

            $('.mediaDelete').click(function(e){
                e.preventDefault();

              var url =$(this).attr('href');

              if(confirm("Are you sure you want to delete this?")){
                
                $.ajax({
                  url : url,
                  type:'GET',
                  cache: false,
                  contentType: false,
                  dataType: 'json',
                  beforeSend: function()
                  {
                    
                  },
                  complete: function()
                  {
                      
                  },
                  }).done(function (data) {
                     
                     location.reload(true);
                    
                  }).fail(function () {
                      alert('fail');
                  });
                  
              }else{
                  return false;
              }

            });
          
      });
    </script>

    <script type="text/javascript">
      ///Check Box Select With Count show

          $(function() {
            $('.checkCounter').text('0');
            var generallen = $("input[name='checkid[]']:checked").length;
            if (generallen > 0) {
              $(".checkCounter").text('(' + generallen + ')');
            } else {
              $(".checkCounter").text(' ');
            }
            
          })
          
          function updateCounter() {
            var len = $("input[name='checkid[]']:checked").length;
            if (len > 0) {
              $(".checkCounter").text('(' + len + ')');
            } else {
              $(".checkCounter").text(' ');
            }
          }
          
          $("input:checkbox").on("change", function() {
            updateCounter();
          });

       
        $(document).ready(function(){
          $('#checkall').click(function() {
              var checked = $(this).prop('checked');
              $('input:checkbox').prop('checked', checked);
              updateCounter();
            });
        });
        
        ///Check Box Select With Count show
      </script>

      @stack('js')
   </body>
   <!-- END: Body-->
 </html>