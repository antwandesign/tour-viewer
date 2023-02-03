<template>

    <div ref='viewerDiv' id="viewer" style="width: 1000px; height: 700px;"></div>
    
    </template>
<script setup lang='ts'>
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.scss';
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
    image?: string
}

//Component definitons
const props = defineProps<Props>()
const viewerDiv = ref<HTMLElement>()
let viewer: Viewer


//Initialize viewer with a image recieved from props
onMounted(() => {
    viewer = new Viewer({
        container: viewerDiv.value as HTMLElement,
        panorama: props.image,
        navbar: false,
        defaultZoomLvl: 0,
        maxFov: 100
    });
})

//Change viewer photo when props get updated
watch(props, () => {
    if (viewer) {
        viewer.setPanorama(props.image)
    }
})

//Destroy the viewer on unmount
onUnmounted(() => {
    if (viewer) {
        viewer.destroy()
    }

})


</script>