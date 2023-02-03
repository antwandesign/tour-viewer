<template>

    <div ref='viewerDiv' id="viewer" style="width: 1000px; height: 700px;"></div>
    
    </template>
<script setup lang='ts'>
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.scss';
import { ref, onMounted, watch } from 'vue'

interface Props {
    image: string
}

const props = defineProps<Props>()
const viewerDiv = ref<HTMLElement>()
let viewer: Viewer

onMounted(() => {
    //Initialize viewer with a image recieved from props
    viewer = new Viewer({
        container: viewerDiv.value as HTMLElement,
        panorama: props.image,
        navbar: false,
        defaultZoomLvl: 0,
        maxFov: 100
    });
})
watch(props, () => {
    viewer.setPanorama(props.image)
})


</script>