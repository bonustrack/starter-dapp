<template>
  <Container>
    <h1 class="mb-3">Starter dapp</h1>
    <div>
      <div class="mb-4">
        <div class="mb-4">
          <h3>Network</h3>
          <p>{{ web3.network.name }}</p>
        </div>
        <h3>Send transaction</h3>
        <UiButton @click="onSubmit" :loading="loading">
          Submit
        </UiButton>
      </div>
    </div>
  </Container>
</template>

<script>
import { mapActions } from 'vuex';
import { sendTransaction } from '@snapshot-labs/snapshot.js/src/utils';
import abi from '@/helpers/abi';

const token = '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea';

export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapActions(['notify']),
    async onSubmit() {
      this.loading = true;
      try {
        const tx = await sendTransaction(
          this.$auth.web3,
          token,
          abi['TestToken'],
          'approve',
          ['0xeF8305E140ac520225DAf050e2f71d5fBcC543e7', '1000000']
        );
        const receipt = await tx.wait();
        console.log('Receipt', receipt);
        this.notify('You did it!');
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    }
  }
};
</script>
