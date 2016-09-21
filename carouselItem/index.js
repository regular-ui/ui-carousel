import { Component, _ } from 'rgui-ui-base';
import template from './index.rgl';

const CarouselItem = Component.extend({
    name: 'carouselItem',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            title: '',
        });
        this.supr();

        // 没有$outer就直接报错
        this.$outer.data._list.push(this);
    },
    /**
     * @protected
     * @override
     */
    destroy() {
        // 从$outer组件的列表中删除自己
        const index = this.$outer.data._list.indexOf(this);
        ~index && this.$outer.data._list.splice(index, 1);
        this.supr();
    },
    isCurrent() {
        return this.$outer.data._list.indexOf(this) === this.$outer.data.current;
    },
    isActive() {
        return this.$outer.data._list.indexOf(this) === this.$outer.data.active;
    },
    isPrev() {
        const index = this.$outer.data._list.indexOf(this);
        const length = this.$outer.data._list.length;
        return index === (this.$outer.data.current - 1 + length)%length;
    },
    isNext() {
        const index = this.$outer.data._list.indexOf(this);
        const length = this.$outer.data._list.length;
        return index === (this.$outer.data.current + 1)%length;
    },
}).directive({
    'z-prev': _.createBoolClassDirective('z-prev'),
    'z-next': _.createBoolClassDirective('z-next'),
});
