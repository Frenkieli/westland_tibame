(function ($, global) {
	$.fn.polygon = function (options) {
		var ops = $.extend({
			num: 0,
			width: 100,
			height: 100,
			timer: false,
		}, options);

		var $content = $(this);
		var $child = $content.find('> *');
		var length = $child.length;

		var selectedNum = ops.num;

		var deg = 360 / length;

		var r = deg / 2 * Math.PI / 180;
		var translateZ = ops.width / 2 / Math.tan(r);
		var index = length * 10;
		$('#arrowlift').click(function () {
			index = index - 1;
			move(index % length);
			console.log(index);
		});

		$('#arrowright').click(function () {
			index = index + 1;
			move(index % length);
			console.log(index);
		});


		// 手指事件

		let facility_slider = document.getElementById('facility_slider');

		function touchmoveBanner() {
			var touchMove = 0;
			var touchIn = 0;
			facility_slider.addEventListener('touchstart', function (e) {
				var touch = event.targetTouches[0];
				touchIn = touch.pageX;
				console.log(touch.pageX, 'touchIn');
			}, false);
			// 判斷手指頭進場
			facility_slider.addEventListener('touchmove', function (e) {
				if (event.targetTouches.length == 1) {
					var touch = event.targetTouches[0];
					// 把元素放在手指所在的位置
					touchMove = touchIn - touch.pageX;
					facility_slider.style.transform = `rotateY(${-touchMove / 5}deg)`;
					facility_slider.style.transition = '0s';

				}

			}, false);
			// 判斷手指頭移動距離,和移動時回饋
			facility_slider.addEventListener('touchend', function (e) {
				if (touchMove > 100) {
					index = index + 1;
					move(index % length);
					console.log(index);
					// console.log(cat_slide.style.right, 'slidrRight');
				} else if (touchMove < -100) {
					index = index - 1;
					move(index % length);
					console.log(index);
					// console.log(cat_slide.style.right, 'slidrLeft');
				} else {
				}
				facility_slider.style.transition = '1s ease-in-out';
				facility_slider.style.transform = `rotateY(0deg)`;
			}, false);
			//判斷要進行的事件
		}

		touchmoveBanner();

		// 手指事件結束


		$child.css({
			width: ops.width,
			height: ops.height,
		});
		$child.each(function (i, el) {
			$(this).css({
				transform: 'rotateY(' + (deg * -(selectedNum - i)) + 'deg) ' + 'translateZ(' + translateZ + 'px)'
			})
		});

		$child.on('click', function () {
			index = $(this).index();
			console.log(index);
			move(index);
		});

		function move(num) {
			var prev = selectedNum;

			selectedNum = num >= length ? 0 :
				num < 0 ? length - 1 : num;

			var amountOfMovement = getPositionNum(prev - selectedNum);

			$child.each(function (i, el) {
				var y = parseFloat($(this).prop('style').transform.match(/rotateY\(([^deg)]+)/)[1]);

				$(this).css({
					transform: 'rotateY(' + (y + deg * amountOfMovement) + 'deg) ' + 'translateZ(' + translateZ + 'px)'
				})
			});
			index = index + length * 10;
		}

		function getPositionNum(positionNum) {
			if (Math.abs(positionNum) > Math.floor((length - 1) / 2)) {
				if (0 < positionNum) {
					return positionNum + -length;
				} else {
					return positionNum + length;
				}
			} else {
				return positionNum;
			}
		}

		if (ops.timer) {
			var timer = {
				content: '',
				start: function () {
					this.content = setInterval(this.main, ops.timer);
				},
				stop: function () {
					clearInterval(this.content);
				},
				main: function () {
					move(selectedNum + 1);
				}
			};

			timer.start();
			$content.hover(function () {
				timer.stop();
			}, function () {
				timer.start();
			});
		}
	}
}(jQuery, this));