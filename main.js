function reverse() {
    const signup = document.querySelector('#sign-up-btn');
    const signin = document.querySelector('#sign-in-btn');

    signup.classList.remove('bg-secondary');
    signup.classList.add('bg-success');

    signin.classList.remove('bg-success');
    signin.classList.add('bg-secondary');

    const form = document.querySelector('form');
    form.innerHTML = '';
    form.innerHTML = `
         <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label" data-aos="fade-up">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" data-aos="fade-up" data-aos-delay="100">
                        <div id="emailHelp" class="form-text text-light" data-aos="fade-up" data-aos-delay="200">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" data-aos="fade-up" data-aos-delay="300">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" data-aos="fade-up" data-aos-delay="400">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">I agree to contribute</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
    `;

}

function change() {
    const signup = document.querySelector('#sign-up-btn');
    const signin = document.querySelector('#sign-in-btn');

    signin.classList.remove('bg-secondary');
    signin.classList.add('bg-success');

    signup.classList.remove('bg-success');
    signup.classList.add('bg-secondary');

    const form = document.querySelector('form');
    form.innerHTML = '';
    form.innerHTML = `
         <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label" data-aos="fade-up">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" data-aos="fade-up" data-aos-delay="100">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" data-aos="fade-up" data-aos-delay="200">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" data-aos="fade-up" data-aos-delay="300">
                    </div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
    `
}