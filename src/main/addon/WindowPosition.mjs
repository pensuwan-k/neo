import Base from '../../core/Base.mjs';

/**
 *
 * @class Neo.main.addon.WindowPosition
 * @extends Neo.core.Base
 * @singleton
 */
class WindowPosition extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.WindowPosition'
         * @protected
         */
        className: 'Neo.main.addon.WindowPosition',
        /**
         * @member {Number|null} screenLeft=null
         */
        screenLeft: null,
        /**
         * @member {Number|null} screenTop=null
         */
        screenTop: null,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        console.log('main.addon.WindowPosition ctor');
        this.screenLeft = window.screenLeft;
        this.screenTop  = window.screenTop;
    }
}

Neo.applyClassConfig(WindowPosition);

let instance = Neo.create(WindowPosition);

Neo.applyToGlobalNs(instance);

export default instance;