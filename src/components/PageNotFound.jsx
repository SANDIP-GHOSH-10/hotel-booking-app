import React from 'react'
import '../css/PageNotFound.css'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
    return (
        <div>
            <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		{/* <a href="" class="link_404"> */}
        <Link to ={'/'} class="link_404">
        Go to Home
        </Link>
        {/* </a> */}
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
        </div>
    )
}

export default PageNotFound
