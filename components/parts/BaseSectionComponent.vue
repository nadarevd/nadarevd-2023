<template>
    <div class="py-16 w-full flex flex-col space-y-4">
        <!-- class="w-fit px-4 rounded-xl border  bg-gradient-to-r from-primary to-secondary" -->
        <div class="w-fit" :class="marginAlignment">
            <div class="w-full rounded-xl bg-gradient-to-r from-primary via-secondary to-tertiary p-[.07rem]">
                <div class="flex h-full w-full items-center justify-center bg-lightsOff rounded-xl px-3 py-[4px]">
                    <div class=" bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary text-xs text-transparent font-bold">
                        <slot name="tag">Nadarevic Denis</slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-fit" :class="marginAlignment">
            <h1 class="text-white capitalize relative text-5xl font-bold">
                <slot name="header">Header</slot>
            </h1>
        </div>
        <div class="w-fit" :class="marginAlignment">
            <h1 class="text-gray-500 capitalize relative text-sm -top-2">
                <slot name="subheader"></slot>
            </h1>
        </div>
        <div>
            <slot name="component"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseSectionComponent',
    components: {
    },
    props: {
        alignment: {
            type: String,
            default: 'left'
        }
    },
    data() {
        return {
        }
    },
    computed: {
        marginAlignment() {
            if (this.alignment === 'left') {
                return 'mr-auto text-left'
            } else if (this.alignment === 'right') {
                return 'ml-auto text-right'
            } else {
                return 'mx-auto text-center'
            }
        }
    },
    methods: {
    }
}
</script>