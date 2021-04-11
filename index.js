
class Plugin {

    constructor(serverless, options) {

        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('aws');

        console.log(this.serverless.service.provider)
        // console.log(serverless)

        this.hooks = {
            'deploy:compileEvents': this.deployCompileEvents.bind(this)
        };
    }

    deployCompileEvents() {
        console.log(this.serverless.service.provider)
    }
}

module.exports = Plugin;
