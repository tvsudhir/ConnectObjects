
function connect (srcContext, srcMethodName, targetContext, targetMethodName) {
	var srcMethod = srcContext[srcMethodName]
		, targetMethod = targetContext[targetMethodName]
		;

	srcContext[srcMethodName] = function () {
		srcMethod.apply(srcContext, arguments);
		targetMethod.apply(targetContext, arguments);
	};
};
