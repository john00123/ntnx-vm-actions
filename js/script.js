const items = [

  { name: '',
    sub:['Update','Clone','Launch Console','Delete'],
    type: 'single',
  },
  { name: 'Power Operations',
    sub:['Power On','Power Off','Pause/Suspend','Resume'],
    type: 'nested',
  },
  { name: 'Data Protection Operations',
    sub:['Protect','Unprotect','Snapshot','Migrate','Add to Recovery Plan'],
    type: 'nested',
  },
  { name: 'Security Policy - Quarantine',
    sub:['Quarantine VMs','Unquarantine VMs'],
    type: 'nested',
  },
  { name: 'Affinity Policy',
    sub:['Configure VM Host-Affinity','Configure VM Anti Host-Affinity'],
    type: 'nested',
  },
  { name: '',
    sub:['Run Playbooks','Manage Categories'],
    type: 'single',
  },
  { name: '',
    sub:['Add to Catalog','Manage Ownership','Set QoS Attributes'],
    type: 'single',
  },
  { name: 'Nutanix Gest Tools Operations',
    sub:['Install','Manage Applications','Upgrade Tools'],
    type: 'nested',
  },
  { name: '',
    sub:['Create Template from VM','Create OVA from VM'],
    type: 'single',
  }
]

///

$('#actions').append(`${arrow}`);
$('#actions').after(` <div class='menu'></div>`);
items.map(key => $('.menu').append(`
  <div class='section'>
  ${key.name? `<span hcd> ${key.name} ${arrow}</span>`: '' }
    <div class='subsection ${key.type =='nested'? 'flyout':''}'>
      ${key.sub.map(sub => `<li hcs>${sub}</li>`).join('')}
    </div>
  </div>
  <hr/>
`))

$('li').click(function(){
  alert($(this).text())

})

  // $('.section').eq(0).before('<kbd>VM Management</kbd>');
  // $('.section').eq(2).before('<kbd>Protection and security</kbd>');
  // $('.section').eq(5).before('<kbd>Administration</kbd>');
  // $('.section').eq(7).before('<kbd>Tools</kbd>');
  // $('hr').eq(3).remove();
  // $('hr').eq(2).remove();


function show(){
  let button = $('#actions')
  $('.menu').fadeToggle(100);
  $('.menu').animate({ scrollTop: "0" });
}
