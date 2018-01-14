describe( 'square', () =>
{
    it( 'should return square of number given', () =>
    {
        expect( square( 9 ) ).toBe( 81 );
        expect( square( 4 ) ).toBe( 16 );
    })
})

describe( 'convertToHalfUpper', () =>
{
    it( 'should convert half letters in a word to uppercase', () =>
    {
        expect( convertToHalfUpper( 'wolverine' ) ).toBe( 'WOLVerine' );
        expect( convertToHalfUpper( 'planet' ) ).toBe( 'PLAnet' );
        expect( convertToHalfUpper( 'plaNET' ) ).toBe( 'PLAnet' );
    })

    it( 'should convert first X characters to uppercase', () =>
    {
        expect( convertToHalfUpper( 'wolverine', 3 ) ).toBe( 'WOLverine' );
        expect( convertToHalfUpper( 'superman', 5 ) ).toBe( 'SUPERman' );
        expect( convertToHalfUpper( 'superMAN', 3 ) ).toBe( 'SUPerman' );
    })
})


describe( 'state management', () =>
{
    it( 'should report empty state, if nothing was added', () =>
    {
        expect( getState().length ).toBe( 0 )
    })


    it( 'should add items into state once addToState was called', () =>
    {
        addToState(); // undefined is invalid
        addToState( null ); // null is invalid
        addToState( '' ); // empty string is invalid
        addToState( false ); // false is invalid
        addToState( 'first' );
        addToState( 'second' );

        expect( getState().length ).toBe( 2 );
        expect( getState()[0] ).toBe( 'first' );
        expect( getState()[1] ).toBe( 'second' );

        dropState();

        expect( getState().length ).toBe( 0 );
    })


    it( 'should return a function from addToState that can be used to delete an item', () =>
    {
        let d = addToState( 'first' );
        addToState( 'second' );

        expect( getState().length ).toBe( 2 );
        d();

        expect( getState().length ).toBe( 1 );
        expect( getState()[0] ).toBe( 'second' )

        dropState();

        addToState( 'first' );
        d = addToState( 'second' );

        expect( getState().length ).toBe( 2 );
        d();

        expect( getState().length ).toBe( 1 );
        expect( getState()[0] ).toBe( 'first' )
    })
})