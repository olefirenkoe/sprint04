let user = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value
};

// Don't edit above this line

user = new Proxy(user, {
    set(target, name, val) {
        if (name === 'name' && /[0-9]/.test(val) != true) {
            val = val.toLowerCase();
            val = val.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
            target[name] = val;
            return true;
        } else if (name === 'age' && /\D/.test(val) != true && Number(val) <= 999 && /^0/.test(val) != true) {
            target[name] = val;
            return true;
        } else if (name === "email" && /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(val) === true) {
            target[name] = val;
            return true;
        } else {
            return false;
        }
    }
});

// Don't edit below this line

function edit(btn) {
    btn.innerHTML = 'save';
    btn.setAttribute('onclick', 'save(this)');
    const input = document.getElementById(btn.previousElementSibling.id);
    input.removeAttribute('disabled');
}

function save(btn) {
    btn.innerHTML = 'edit';
    btn.setAttribute('onclick', 'edit(this)');
    const input = document.getElementById(btn.previousElementSibling.id);
    input.setAttribute('disabled', 'true');
    user[input.id] = document.getElementById(input.id).value;
    document.getElementById(input.id).value = user[input.id];
}