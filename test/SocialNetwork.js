const SocialNetwork = artifacts.require('./SocialNetwork.sol')

require('chai').use(require('chai-as-promised')).should()

contract('SocialNetwork', ([deployer, author, tipper ])=>{
    let socialNetwork

    before(async() =>{
        socialNetwork = await SocialNetwork.deployed();
    })

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            const address = socialNetwork.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)  
        })
         it('has name', async() => {
             const name = await socialNetwork.name()
             assert.equal(name, 'Decentralized Social Network')
         })
    })
    
    describe('posts', async() => {
        let result, postCount
        it('Create Posts', async()=> {
            result = await socialNetwork.createPost('My First Post',{from:author})
            postCount = await socialNetwork.postCount()
            //success
            assert.equal(postCount, 1)
            //failure
            await socialNetwork.createPost('',{from:author}).should.be.rejected
       })
       it('List all Posts', async()=> {
           
      })
      it('allow users to tip Posts', async()=> {
           
      })
    })
})
