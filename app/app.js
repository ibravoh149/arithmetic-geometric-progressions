module.exports = {
	aritGeo: (arg) => {

				const [value1, value2] = arg;
		const Diff = value2 - value1;

		
		if ( arg.length === 0) {
			return 0;
		}
		for (let i = 1; i < arg.length - 1; i++) {
			if (Diff === arg[i + 1] - arg[i]) {
				continue;
			}else{
				return geo(arg)
			}
		}
        return 'Aritmetic'
         
        
        function geo(arg) {
        	const [value1, value2] = arg;
            const Ratio = value2 / value1;
            
            for(let i = 1; i < arg.length - 1; i++) {
            	if(Ratio === arg[i + 1] / arg[i]) {
            		continue;
            	}else{return -1}
            }
            return 'Geometric';
        }
	}
}