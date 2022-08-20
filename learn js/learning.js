`
    passing form DATA
`

let form = document.forms.feedback;



let select=form.elements.country;


const opt=document.createElement('option');

opt.value='sgp';
opt.text='Singapore';
select.add(opt,1);

let opt2=new Option('Suadi Arabia','SAB');

select.add(opt2,0);

console.log(select);















































const submit = (e) => {
  e.preventDefault();



  const formData = [...new FormData(form)];





};

form.addEventListener('submit', submit);