angular.module('fw-work')

	.directive('fwInputText',function(){
		return {
			templateUrl: "./templates/elements/fw-input-text-field.html"
		};
	})

	.directive('fwInputNumber',function(){
		return {
			templateUrl: "./templates/elements/fw-input-number-field.html"
		}
	})

	.directive('fwSelect',function(){
		return{
			templateUrl: "./templates/elements/fw-select-field.html"
		}
	})

	.directive('fwDate',function(){
		return{
			templateUrl: "./templates/elements/fw-date-field.html"
		}
	})

	.directive('fwRadio',function(){
		return{
			templateUrl: "./templates/elements/fw-radio-field.html"
		}
	})

	.directive('fwCheckbox',function(){
		return{
			templateUrl: "./templates/elements/fw-checkbox-field.html"
		}
	})

	.directive('fwFile',function(){
		return{
			templateUrl: "./templates/elements/fw-file-field.html"
		}
	})

	.directive('fwSwitch',function(){
		return{
			templateUrl: "./templates/elements/fw-switch-field.html"
		}
	})

	.directive('fwTextarea',function(){
		return{
			templateUrl: "./templates/elements/fw-textarea-field.html"
		}
		
	});
