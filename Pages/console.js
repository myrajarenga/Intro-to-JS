const logged = [];
function consoleLogger(name) {
	const div = document.createElement("div");
	div.classList.add("code");
	document.getElementsByTagName("main")[0].append(div);
	(function initTitle() {
		const title = document.createElement("span");
		title.classList.add("title");
		div.append(title);
		title.textContent = "Console - " + name + ".js";
	})();
	const _ = console.log;
	let lines = 0;
	function generateElement(arg) {
		const element = document.createElement("pre");
		if (Array.isArray(arg)) {
			element.classList.add("array");
			(function() {
				const span = document.createElement("span");
				span.textContent = "[ ";
				element.append(span);
			})();
			for (const item of arg) {
				if (element.childElementCount > 1) {
					(function() {
						const span = document.createElement("span");
						span.textContent = ", ";
						element.append(span);
					})();
				}
				element.append(generateElement(item));
			}
			(function() {
				const span = document.createElement("span");
				span.textContent = " ]";
				element.append(span);
			})();
		} else if (arg && typeof arg === "object") {
			(function() {
				const span = document.createElement("span");
				span.textContent = "{ ";
				element.append(span);
			})();
			for (const prop in arg) {
				if (element.childElementCount > 1) {
					(function() {
						const span = document.createElement("span");
						span.textContent = ", ";
						element.append(span);
					})();
				}
				const property = document.createElement("span");
				property.classList.add("string");
				property.textContent = "\"" + prop + "\"";
				element.append(property);
				(function() {
					const span = document.createElement("span");
					span.textContent = ": ";
					element.append(span);
				})();
				element.append(generateElement(arg[prop]));
			}
			(function() {
				const span = document.createElement("span");
				span.textContent = " }";
				element.append(span);
			})();
		} else if (arg === null || (!arg && isNaN(arg))) {
			element.classList.add("boolean");
			element.textContent = String(arg);
		} else if (typeof arg === "string") {
			element.classList.add("string");
			element.innerHTML = "\"" + arg + "\"";
		} else {
			element.classList.add(typeof arg);
			element.textContent = JSON.stringify(arg);
		}
		return element;
	}
	console.log = function(...args) {
		_(...args);
		logged.push(...args);
		for (const arg of args) {
			lines++;
			const line = document.createElement("span");
			line.classList.add("line");
			const lineNumber = document.createElement("span");
			lineNumber.classList.add("line-number");
			lineNumber.textContent = lines;
			line.append(lineNumber);
			line.append(generateElement(arg));
			div.append(line);
		}
		if (args.length === 1) {
			return args[0];
		}
		return args;
	};
}