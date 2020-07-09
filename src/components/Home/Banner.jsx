import React from "react";

export default () => {
	return (
		<div
			id="carouselExampleFade"
			className="carousel slide carousel-fade"
			data-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="/static/1.jpg"
						className="d-block w-100 banner"
						alt=""
					/>
				</div>
				<div className="carousel-item">
					<img
						src="/static/2.jpg"
						className="d-block w-100 banner"
						alt=""
					/>
				</div>
				<div className="carousel-item">
					<img
						src="/static/3.jpg"
						className="d-block w-100 banner"
						alt=""
					/>
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleFade"
				role="button"
				data-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleFade"
				role="button"
				data-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
