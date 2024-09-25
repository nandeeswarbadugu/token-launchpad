
export function TokenLaunchpad() {

    function createToken(){
        const name = document.getElementById("name").value;
        const symbol = document.getElementById("symbol").value;
        const imageUrl = document.getElementById("image-url").value;
        const initialSupply = document.getElementById("initial-supply").value;
        console.log(name);
    }

    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input id="name" className='inputText' type='text' placeholder='Name'></input> <br />
        <input id="symbol" className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input id="image-url" className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input id="initial-supply" className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={createToken} className='btn'>Create a token</button>
    </div>
}