<template>
    <div class="record-container">
    <ul class="reocrd-wraps">
        <li>
            <RecordCard record=""></RecordCard>
        </li>
    </ul>
    </div>
</template>

<script>
import RecordCard from './RecordCard.vue';

export default {
    components: {
        RecordCard
    },
    data() {
        return {
            records: [
                {
                    date: '2017-07-31',
                    recordList: [
                        {
                            // 1-支出；0-收入
                            type: 1,
                            text: '买菜',
                            num: '14.3'
                        },
                        {
                            // 1-支出；0-收入
                            type: 1,
                            text: '买菜',
                            num: '14.3'
                        }
                    ]
                }
            ]
        };
    }
}
</script>

