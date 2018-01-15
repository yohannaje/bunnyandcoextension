
  for( var _i = 1; _i <= 31; _i += 1 ){
    var _addClass = '';
    if( _i === 12 ){ _addClass = ' class="selected"'; }

    switch( _i ){
      case 8:
      case 10:
      case 27:
        _addClass = ' class="event"';
      break;
    }

    document.write( '<li><a href="#" title="'+_i+'" data-value="'+_i+'"'+_addClass+'>'+_i+'</a></li>' );
  }
