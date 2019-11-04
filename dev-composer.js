import compose from 'docker-compose'
import path from 'path'

const __dirname = path.resolve()

export const up = (services = '') => compose.upMany(
		services,
		{
			cwd: path.join(__dirname) + '/composetest', log: true
		}
	).then(
		() => {
			console.log('+ `up` done')
			console.log('+ Current path >>', __dirname)
		},
		err => { console.log('something went wrong:', err.message)}
  );

export const stopOne = (service = '') => compose.stopOne(
	service,
	{
		cwd: path.join(__dirname) + '/composetest', log: true
	}
).then(
	() => {
		console.log('+ `upAll` done')
		console.log('+ Current path >>', __dirname)
	},
	err => { console.log('something went wrong:', err.message)}
);

export const upEnv = () => compose.upAll({
		cwd: path.join(__dirname) + '/composetest', log: true
	}).then(
		() => {
			console.log('+ `upAll` done')
			console.log('+ Current path >>', __dirname)
		},
		err => { console.log('something went wrong:', err.message)}
  );

export const dropEnv = () => compose.down({ cwd: path.join(__dirname) + '/composetest', log: true })
	.then(
		() => {
			console.log('+ `dropAll` done')
			console.log('+ Current path >>', __dirname)
		},
		err => { console.log('something went wrong:', err.message)}
  );
