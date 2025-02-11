import Base from '../core/Base.mjs';

/**
 * @class Neo.util.String
 * @extends Neo.core.Base
 */
class StringUtil extends Base {
    /**
     * @member {Object} charEntityMap
     * @static
     */
    static charEntityMap = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        '\'': '&apos;',
        '$' : '&dollar;',
        '\\': '&bsol;',
        '/' : '&sol;'
    }
    /**
     * @member {RegExp} charPattern
     * @static
     */
    static charPattern = /[&<>"'$\\]/g
    /**
     * @member {RegExp} entityPattern
     * @static
     */
    static entityPattern = /(&amp;)|(&lt;)|(&gt;)|(&quot;)|(&apos;)|(&dollar;)|(&bsol;)|(&sol;)/g

    static config = {
        /**
         * @member {String} className='Neo.util.String'
         * @protected
         */
        className: 'Neo.util.String'
    }

    /**
     * Escape HTML special characters
     * @param {String} value
     */
    static escapeHtml(value) {
        let me = this; // inside a static method, we are pointing to the class prototype

        if (Neo.typeOf(value) !== 'String') {
            return value;
        }

        return value.replace(me.charPattern, me.getEntityFromChar.bind(me));
    }

    /**
     * Get char equivalent of a mapped entity
     * @param {String} entity
     */
    static getCharFromEntity(entity) {
        const mappedChar = Object.keys(this.charEntityMap).find(key => this.charEntityMap[key] === entity);
        return mappedChar || entity;
    }

    /**
     * Get entity equivalent of a mapped char
     * @param {String} char
     */
    static getEntityFromChar(char) {
        return this.charEntityMap[char] || char;
    }

    /**
     * Unescape HTML special characters
     * @param {String} value
     */
    static unescapeHtml(value) {
        let me = this; // inside a static method, we are pointing to the class prototype

        if (Neo.typeOf(value) !== 'String') {
            return value;
        }

        return value.replace(me.entityPattern, me.getCharFromEntity.bind(me));
    }

    /**
     * Returns the passed string with the first letter uncapitalized.
     * @param {String} value 
     * @returns  {String}
     */
    static uncapitalize(value) {
        return value && value[0].toLowerCase() + value.substring(1)
    }
}

Neo.applyClassConfig(StringUtil);

export default StringUtil;
