module.exports = {
	mode: 'development',
	entry: './clock.js',
	output: {
		filename: 'clock.bnd.js',
		publicPath: 'dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
