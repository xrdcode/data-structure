function LinkedList() {
	this.front = null;
	this.back = null;
}

function Node(data, next) {
	this.data = data;
	this.next = next;	
}

LinkedList.prototype.Enqueue = function(element) {
	var N = new Node(element, null);
	if(this.back == null) {
		this.front = N;
		this.back = N;
	} else {
		this.back.next = N;
		this.back = this.back.next;
	}
}

LinkedList.prototype.Dequeue = function() {
	var first = Queue.front;
	
	if(first != null) {
		this.front = this.front.next;
		return first.data;
	} else {
		if(this.back != null) {this.back = null}
		return 'List is empty';
	}
}


