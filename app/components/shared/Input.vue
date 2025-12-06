<template>
  <div>
    <label
      v-if="label"
      class="block text-[14px] font-normal font-roboto text-[#2A2A48] mb-2"
    >
      {{ label }}
    </label>
    <div v-if="type === 'select'" class="relative">
      <select
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
        "
        class="placeholder:text-[#2A2A4899] w-full border border-gray-200 rounded p-3 text-sm appearance-none bg-white focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition"
      >
        <option v-if="placeholder" value="" disabled selected>
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <span
        class="absolute right-3 top-3.5 text-gray-400 text-xs pointer-events-none"
        >▼</span
      >
    </div>
    <textarea
      v-else-if="type === 'textarea'"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      :placeholder="placeholder"
      :rows="rows"
      class="w-full border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition placeholder:text-[#2A2A4899]"
    ></textarea>
    <div v-else>
      <div class="relative">
        <input
          :type="type"
          :value="modelValue"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
          :placeholder="placeholder"
          :maxlength="maxlength"
          class="w-full border border-[#ECECEC] p-3 text-[16px] focus:outline-none focus:ring-1 focus:ring-gray-200 transition rounded-[4px] placeholder:text-[#2A2A4899]"
        />
        <slot name="suffix" />
      </div>
      <span
        v-if="hint"
        class="text-[12px] text-[#2A2A4899] block font-roboto font-normal mt-2"
      >
        {{ hint }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string;
  label: string;
}

interface Props {
  label?: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  modelValue: string;
  placeholder?: string;
  hint?: string;
  rows?: number;
  options?: Option[];
  maxlength?: number;
}

withDefaults(defineProps<Props>(), {
  type: "text",
  rows: 3,
  options: () => [],
});

defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>
