const folders =
{
  type: 'dir',
  name: 'Home',
  children: [
    {
      type: 'file',
      name: 'question.png',
      path: '/home/joana',
      size: 153865,
      created_at: 01/26/2018,
      updated_at: 01/26/2018,
      owner: 'joana',
      content_type: 'image/png'
    },
    {
      type: 'dir',
      name: 'Downloads',
      children: [
        {
          type: 'file',
          name: 'TCP.tcl',
          path: '/home/joana/Downloads',
          size: 2263,
          created_at: 02/12/2018,
          updated_at: 02/12/2018,
          owner: 'joana',
          content_type: 'text/x-tcl'
        },
        {
          type: 'file',
          name: 'delay.sh',
          path: '/home/joana/Desktop',
          size: 690,
          created_at: 02/12/2018,
          updated_at: 02/12/2018,
          owner: 'joana',
          content_type: 'application/x-shellscript'
        },
        {
          type: 'file',
          name: 'delivered_packets_1.eps',
          path: '/home/joana/Desktop',
          size: 31218,
          created_at: 02/12/2018,
          updated_at: 02/12/2018,
          owner: 'joana',
          content_type: 'image/x-eps'
        },      
        {
          type: 'dir',
          name: 'ns-allinone-2.35',
          children: [
               {
              type: 'file',
              name: 'README',
              path: '/home/joana/ns-allinone-2.35',
              size: 1873,
              created_at: 01/23/2018,
              updated_at: 02/12/2018,
              owner: 'joana',
              content_type: 'text/plain'
            }
          ]
        }
      ]
    },
    {
      type: 'dir',
      name: 'ns-2.35',
      children: [
        {
          type: 'file',
          name: 'aodv.cc',
          path: '/home/joana/ns-allinone-2.35/ns-2.35/aodv',
          size: 34968,
          created_at: 01/23/2018,
          updated_at: 01/23/2018,
          owner: 'joana',
          content_type: 'text/x-c++src'
          
        },
        {
          type: 'file',
          name: 'aodv_rqueue.cc',
          path: '/home/joana/ns-allinone-2.35/ns-2.35/aodv',
          size: 4791,
          created_at: 01/23/2018,
          updated_at: 01/23/2018,
          owner: 'joana',
          content_type: 'text/x-c++src'
        }
      ]
    }
  ]
};

function displayTree( data) {
  var htmlRetStr = "<ul class='folder-container'>";
  for (var key in data) {
    if (typeof(data[key])== 'object' && data[key] != null) {
      htmlRetStr += displayTree( data[key] );
      htmlRetStr += '</ul></li>';
    } else if(data[key]=='dir'){
      htmlRetStr += "<li class='folder-item'>" + data["name"]+"</li><li class='folder-wrapper'>";
    }
    else if( key=='name' && data['type']!='dir' ){
      htmlRetStr += "<li class='file-item'>" + data['name']+"</li>";
    }
  }
  return( htmlRetStr );
}
function filterTree(data,string) {
  arr = [];
  for (var key in data)
    if (typeof(data[key]) == 'object' && data[key] != null) {
      if (data['name'].indexOf(string) <= -1) {
        for (var i = 0; i < data.children.length; i++) {
          arr=arr.concat(filterTree(data.children[i], string));
        }
        return arr;
      }
    }
    else {
        if (data['name'].indexOf(string) > -1) {
          arr = arr.concat(data);
          return arr;
        }
    }
}
document.getElementById("folders").innerHTML= displayTree(folders);
function solve() {
  var toSearch=document.getElementById('filterInput').value;
  if(toSearch.length==0){
    document.getElementById("folders").innerHTML= displayTree(folders);
  }
  else {
    var str = "Searching for: " + document.getElementById('filterInput').value ;
    document.getElementById("searchingFor").innerHTML = str;
    document.getElementById("folders").innerHTML = displayTree(filterTree(folders, document.getElementById('filterInput').value));
  }
}
