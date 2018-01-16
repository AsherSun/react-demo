// 华氏度转摄氏度的函数
export function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

export function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32
}

// 输入框验证结构
export function tryConvert(temperature, convert) {
	const input = parseFloat(temperature)
	// Number.isNaN() 参数如果为 非数字，返回true 。如果为数值，返回false
	if (Number.isNaN(input)) {
		return ''
	}
	const output = convert(input)
	let rounded = Math.round(output * 1000) / 1000
	return rounded
}