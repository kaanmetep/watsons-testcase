<template>
  <div>
    <SharedTopNav />
    <SharedHeader />
    <div>
      <div class="mx-auto w-full bg-[#ECECEC4D] p-6 flex flex-col gap-4">
        <nav class="flex items-center gap-2 mx-auto w-full max-w-[1160px]">
          <span
            class="text-[#8493A8] text-[12px] font-normal font-roboto cursor-pointer"
            >Homepage</span
          >
          <img
            src="/assets/BreadCrumbIcon.png"
            alt="bread crumb"
            width="12"
            height="12"
          />
          <span class="text-[#8493A8] text-[12px] font-normal cursor-pointer"
            >Shopping Cart</span
          >
          <img
            src="/assets/BreadCrumbIcon.png"
            alt="bread crumb"
            width="12"
            height="12"
          />
          <span
            class="text-color-secondary text-[12px] font-medium cursor-pointer"
            >Checkout</span
          >
        </nav>
        <h1
          class="lg:text-[34px] text-[24px] font-medium font-rubik text-[#2A2A48] mx-auto w-full max-w-[1160px]"
        >
          Checkout
        </h1>
      </div>
      <div class="max-w-[1160px] mx-auto lg:py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 items-start">
          <section
            class="lg:col-span-2 order-2 lg:order-1 lg:space-y-10 flex-2"
          >
            <div class="flex flex-col gap-4 lg:gap-8">
              <div
                class="flex items-center gap-4 p-4 lg:p-0 text-indigo-950 bg-[#ECECEC4D] lg:bg-transparent"
              >
                <img
                  src="/assets/HistoryIcon.png"
                  alt="shipping"
                  width="32"
                  height="32"
                  class="rounded-[4px] border border-[#ECECEC] bg-[#ECECEC4D] p-1"
                />
                <h2 class="text-[20px] font-medium text-[#2A2A48]">
                  Shipping details
                </h2>
              </div>

              <form class="space-y-4 px-4 lg:px-0 lg:pb-0 pb-4">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <SharedInput
                    label="First Name *"
                    type="text"
                    v-model="form.firstName"
                  />
                  <SharedInput
                    label="Last Name *"
                    type="text"
                    v-model="form.lastName"
                  />
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <SharedInput
                    label="Email Address *"
                    type="email"
                    v-model="form.email"
                  />
                  <SharedInput
                    label="Phone Number *"
                    type="tel"
                    v-model="form.phone"
                    placeholder="+90 (5 _ _) _ _ _  _ _  _ _"
                  />
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <SharedInput
                    label="City *"
                    type="select"
                    v-model="form.city"
                    placeholder="Please select"
                    :options="[{ value: 'istanbul', label: 'Istanbul' }]"
                  />
                  <SharedInput
                    label="District *"
                    type="select"
                    v-model="form.district"
                    placeholder="Please select"
                    :options="[{ value: 'kadikoy', label: 'Kadikoy' }]"
                  />
                </div>

                <SharedInput
                  label="Address *"
                  type="textarea"
                  v-model="form.address"
                  placeholder="Enter neighborhood, street, avenue and other information"
                  :rows="3"
                />
              </form>
            </div>

            <div
              class="flex flex-col lg:gap-8 gap-4 pb-4 lg:pb-0 border-b border-[#ECECEC] lg:border-transparent"
            >
              <div
                class="flex items-center gap-4 p-4 lg:p-0 text-indigo-950 bg-[#ECECEC4D] lg:bg-transparent"
              >
                <img
                  src="/assets/PaymentIcon.png"
                  alt="payment"
                  width="32"
                  height="32"
                  class="rounded-[4px] border border-[#ECECEC] bg-[#ECECEC4D] p-1"
                />
                <h2 class="text-lg font-bold">Payment details</h2>
              </div>

              <div
                class="flex flex-col-reverse lg:flex-row gap-8 items-start px-4 lg:px-0"
              >
                <div class="flex-1 w-full space-y-4">
                  <SharedInput
                    label="Card Holder Name *"
                    type="text"
                    v-model="payment.holderName"
                    hint="Full name on card"
                  />

                  <SharedInput
                    label="Card Number *"
                    type="text"
                    v-model="payment.cardNumber"
                    hint="Enter digits without spaces"
                    :maxlength="16"
                  />

                  <div class="flex gap-4">
                    <div class="w-1/2">
                      <SharedInput
                        label="Expiry Date *"
                        type="text"
                        :model-value="payment.expiry"
                        @update:model-value="handleExpiryInput"
                        placeholder="MM / YY"
                        :maxlength="5"
                      />
                    </div>
                    <div class="w-1/2">
                      <SharedInput
                        label="CVV *"
                        type="text"
                        v-model="payment.cvv"
                        :maxlength="3"
                      >
                        <template #suffix>
                          <img
                            src="/assets/QuestionmarkDark.png"
                            alt="info"
                            width="24"
                            height="24"
                            class="absolute right-3 top-3 cursor-help pointer-events-none"
                          />
                        </template>
                      </SharedInput>
                    </div>
                  </div>

                  <div class="mt-4 text-[11px] text-gray-400">
                    * Required fields
                  </div>

                  <button
                    :class="[
                      'w-full lg:w-full bg-[#FF27AD] hover:bg-primary-dark text-white font-bold px-4 transition duration-[60ms] rounded-[4px] h-[32px] font-roboto text-[14px] uppercase',
                      isFormValid ? '' : 'opacity-30',
                    ]"
                  >
                    PAY NOW
                  </button>
                </div>
                <!-- CREDIT CARD -->
                <div
                  class="w-full lg:w-72 shrink-0 lg:mt-14 flex justify-center py-4"
                >
                  <div class="relative w-[282px] h-[184px] mr-[64px] lg:mr-0">
                    <div
                      class="absolute top-3 left-14 w-full h-full bg-white rounded-[12px] border border-[#ECECEC] flex flex-col z-0 translate-x-3 translate-y-3"
                    >
                      <div class="w-full h-12 bg-[#ECECEC] rounded mt-6"></div>
                      <div class="p-6">
                        <div class="flex flex-col items-end">
                          <h6
                            class="text-[14px] uppercase font-bold text-[#8493A8] font-roboto"
                          >
                            CVV
                          </h6>
                          <h5 class="font-medium text-[#485363] text-[16px]">
                            {{ payment.cvv || "XXX" }}
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div
                      class="absolute top-0 left-0 w-full h-full bg-white border border-[#ECECEC] p-6 flex flex-col justify-between z-10 rounded-[12px]"
                    >
                      <div class="flex justify-end">
                        <img
                          src="/assets/CardChipIcon.png"
                          alt="front card logo"
                          width="32"
                          height="24"
                        />
                      </div>

                      <div class="text-[20px] text-[#485363] font-bold">
                        {{ payment.cardNumber || "0000 0000 0000 0000" }}
                      </div>

                      <div
                        class="flex flex-col text-[#8493A8] text-[14px] font-roboto font-normal"
                      >
                        <div>
                          {{ payment.holderName || "Card Holder" }}
                        </div>
                        <div class="text-[16px] font-medium text-[#485363]">
                          {{ payment.expiry || "MM / YY" }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside
            class="lg:col-span-1 order-1 lg:order-2 lg:bg-white lg:bg-transparent rounded-[6px] lg:border lg:border-[#ECECEC] p-6 lg:shadow-[0_4px_16px_0_rgba(42,42,72,0.04)]"
          >
            <h3 class="text-[20px] font-bold text-[#2A2A48] mb-[16px]">
              Shopping cart summary
            </h3>

            <div class="space-y-6 mb-6">
              <div
                v-for="item in cartItems"
                :key="item.id"
                class="flex gap-4 last:border-0 bg-white border border-[#ECECEC] rounded-[4px] shadow-[0_1px_2px_0_rgba(55,65,81,0.08)] items-center"
              >
                <div
                  class="rounded flex items-center justify-center bg-[#ECECEC29] p-4 shrink-0 w-[116px]"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="ratio-3/2 object-contain h-full w-full"
                  />
                </div>
                <div class="flex flex-col gap-2 px-2">
                  <h4
                    class="text-[14px] text-[#2A2A48] font-medium font-roboto"
                  >
                    {{ item.name }}
                  </h4>
                  <div class="flex justify-between items-center">
                    <span
                      class="text-[14px] font-normal text-[#485363] font-roboto"
                      >{{ item.price.toFixed(2) }} TL</span
                    >
                    <div class="flex items-center gap-2">
                      <button
                        @click="updateQuantity(item.id, item.qty - 1)"
                        class="bg-[#ECECEC4D] rounded-[4px] border border-[#ECECEC] w-6 h-6 flex items-center justify-center"
                      >
                        <img
                          src="/assets/PlusIcon.png"
                          alt="minus"
                          width="12"
                          height="16"
                        />
                      </button>
                      <span
                        class="text-[16px] text-[#485363] font-medium font-roboto"
                        >{{ item.qty }}</span
                      >
                      <button
                        @click="updateQuantity(item.id, item.qty + 1)"
                        class="bg-[#ECECEC4D] rounded-[4px] border border-[#ECECEC] w-6 h-6 flex items-center justify-center"
                      >
                        <img
                          src="/assets/MinusIcon.png"
                          alt="plus"
                          width="12"
                          height="16"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6">
              <input
                type="text"
                placeholder="Discount code"
                class="w-full h-[48px] border border-[#ECECEC] rounded-[4px] p-4 text-[14px] font-normal font-roboto focus:outline-none focus:ring-1 placeholder:text-[#2A2A4899] placeholder:text-[16px]"
              />
            </div>

            <div
              class="flex flex-col gap-4 text-[16px] font-medium font-roboto text-[#485363]"
            >
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span class="font-medium">{{ subtotal.toFixed(2) }} TL</span>
              </div>
              <div class="flex justify-between">
                <span>Shipping</span>
                <span class="font-medium">{{ shipping.toFixed(2) }} TL</span>
              </div>
              <div
                class="flex justify-between border-t border-[#ECECEC] text-[20px] font-bold text-[#2A2A48] pt-4 font-roboto"
              >
                <span>Total</span>
                <span>{{ total.toFixed(2) }} TL</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Checkout - Watsons",
});

const { cartItems, updateQuantity } = useCart();

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  district: "",
  address: "",
});

const payment = reactive({
  holderName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
});

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0);
});

const shipping = 10.5;

const total = computed(() => subtotal.value + shipping);

const isFormValid = computed(() => {
  return (
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.city.trim() !== "" &&
    form.district.trim() !== "" &&
    form.address.trim() !== "" &&
    payment.holderName.trim() !== "" &&
    payment.cardNumber.trim() !== "" &&
    payment.expiry.trim() !== "" &&
    payment.cvv.trim() !== ""
  );
});

const handleExpiryInput = (value: string) => {
  const digits = value.replace(/\D/g, "");

  const limitedDigits = digits.slice(0, 4);

  // Format: MM/YY
  if (limitedDigits.length <= 2) {
    payment.expiry = limitedDigits;
  } else {
    payment.expiry = limitedDigits.slice(0, 2) + "/" + limitedDigits.slice(2);
  }
};
</script>
