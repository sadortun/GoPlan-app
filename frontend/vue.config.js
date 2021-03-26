const envDefaults = {
  prod: false,
}

module.exports = (env = envDefaults) => ({

  devServer: {
    port        : 3000,
    public      : env.prod === true ? 'goplan.finance' : 'local.goplan.finance:3000',
    contentBase : __dirname,
    hot         : true,
    inline      : true,
    overlay     : true,
    stats       : 'minimal',
  },
})
