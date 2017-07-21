require('../../index.html')
require('../style/invitation.scss')

var $availableNumber = document.getElementById('availableNumber')
var $users = document.getElementsByName('user')
var $eMail = document.getElementById('eMail')
var $main = document.getElementsByTagName('main')[0]
var $invite = document.getElementById('invite')

function calcAvailableNumber() {
  var $selectedUsers = document.querySelectorAll('input[name="user"]:checked')
  $availableNumber.innerText = $users.length - $selectedUsers.length

  var isNotAllow = !($selectedUsers.length || $eMail.value);
  $invite.disabled = isNotAllow
  $invite.className = isNotAllow ? 'disabled' : ''
}

$main.addEventListener('click', function(evt) {
  if(evt.target.type !== 'checkbox') return
  calcAvailableNumber()
})

$invite.addEventListener('click', function() {
  var message = ''

  document.querySelectorAll('input[name="user"]:checked').forEach(function(user) {
    message += user.value + ' '
  })

  alert(message + $eMail.value + ' has been invited')
})

$eMail.addEventListener('keyup', function() {
  calcAvailableNumber()
})

calcAvailableNumber()
