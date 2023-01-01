<template>
	<img
		:class="[checkMarkCSSClass, {'chat-message-group': isGroup}]"
		:src="statusCheckMarker"
	/>
</template>
<script>
export default {
	props: {
		status: {
			type: String,
			required: true,
		},
		isGroup: {
			type: Boolean,
			default: false,
		}
	},

	computed: {
		statusCheckMarker() {
		  if (this.status === 'pending') {
		    return '';
		  } else if (this.status === 'sent') {
		    return '/assets/img/single-check.svg';
		  } else if (this.status === 'received') {
		    return '/assets/img/double-check-unseen.svg';
		  } else if (this.status === 'read') {
		    return '/assets/img/double-check-seen.svg';
		  } else {
		  	// 
		  }
		},

		checkMarkCSSClass() {
		  let status = this.status;
		  let cssClass = (status == 'read' || status == 'received') ? 'double-check-mark' : 'single-check-mark';

		  return cssClass;
		},
	}
}
</script>