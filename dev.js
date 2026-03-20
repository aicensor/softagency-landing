const { execSync } = require('child_process');
const port = process.env.PORT || 3001;
execSync(`npx next dev --webpack -p ${port}`, { stdio: 'inherit', cwd: __dirname });
