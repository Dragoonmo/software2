import test from 'node:test';
import assert from 'node:assert';
import { promisify } from 'node:util';

test('hello to test', async (t) => {
    const testp = 3001;
    const { server } = await import('../../server.js');
    
    const testaddress = `localhost:${testp}/user/login`;

    await t.todo('create test project', async (t) => {
        const data = {
            email: 'Msxsxo@Hotmai.Com',
            password: '111'
        }
        const request = await fetch(testaddress, {
            method:'POST',
            body:JSON(data)
        })
        
    });

    await promisify(server.close.bind(server))();
});
