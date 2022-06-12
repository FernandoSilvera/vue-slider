const slides = [
	{
			image: 'img/01.jpg',
			title: 'Svezia',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
	},
	{
			image: 'img/02.jpg',
			title: 'Svizzera',
			text: 'Lorem ipsum.',
	},
	{
			image: 'img/03.jpg',
			title: 'Gran Bretagna',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	},
	{
			image: 'img/04.jpg',
			title: 'Germania',
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
	},
	{
			image: 'img/05.jpg',
			title: 'Paradise',
			text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
	}
];

console.log(slides);

new Vue (
	{
		el: "#app",

		data: {
			slide: slides,
			slideIndex: 0,
		},

		methods:{
			prevSlide() {
				if (this.slideIndex > 0) {
					this.slideIndex--;
				} else {
					this.slideIndex = this.slideIndex;
				}
			},

			nextSlide() {
				if (this.slideIndex < this.slide.length - 1) {
					this.slideIndex++;
				} else {
					this.slideIndex = this.slideIndex;
				}
			}
		}
	}
)

/*
Descrizione:
Far funzionare lo slider partendo dall’html ricevuto.
-Al click su una freccia, l’immagine mostrata cambia.
-la lista delle thumbs deve essere generata tramite un v-for
*/