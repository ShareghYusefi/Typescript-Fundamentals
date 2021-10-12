// export & define component
export class LikeComponent {
    // define constructor 
    constructor(private _likesCount:number, private _isSelected:boolean){};

    // define onClick action
    onClick() {
        // increment or decrement likesCount
        if(this._isSelected)
            this._likesCount--;
        else 
            this._likesCount++;

        this._isSelected = !this._isSelected;
    }
    // define getters
    get likesCount () {
        return this._likesCount;
    }
    get isSelected () {
        return this._likesCount;
    }
}