<template>
	<div class="p-mb-6">
		<p>
			<b>{{ question }}</b>
		</p>
		<table class="p-fluid" style="width: 100%;">
			<thead>
				<tr>
					<th v-for="column of columns" :key="column.name">
						{{ column.label }}
					</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(row, index) in value" :key="index">
					<!-- Main -->
					<td v-for="column of columns" :key="column.name">
						<Textarea
							:placeholder="column.placeholder"
							:value="row[column.name]"
							:autoResize="true"
							:ref="index"
							rows="2"
							@input="update(index, row, column.name, $event)"
						/>
					</td>
					<!-- Delete -->
					<td style="width: 4rem; text-align: center;">
						<Button
							icon="pi pi-trash"
							class="p-button-rounded p-button-warning"
							@click="confirmDelete(row, index)"
						/>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<Button
					label="Add"
					icon="pi pi-plus"
					class="p-button-success p-mr-2"
					@click="newRow"
				/>
			</tfoot>
		</table>

		<Dialog
			:visible.sync="deleteProductDialog"
			:style="{ width: '450px' }"
			header="Confirm"
			:modal="true"
		>
			<div class="confirmation-content">
				<i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
				<span v-if="selectedRow"
					>Are you sure you want to delete <b>{{ selectedRow.main }}</b
					>?</span
				>
			</div>
			<template #footer>
				<Button
					label="No"
					icon="pi pi-times"
					class="p-button-text"
					@click="deleteProductDialog = false"
				/>
				<Button
					label="Yes"
					icon="pi pi-check"
					class="p-button-text"
					@click="deleteProduct"
				/>
			</template>
		</Dialog>
	</div>
</template>

<script>
import Dialog from "primevue/dialog";
import Textarea from "primevue/textarea";
import Button from "primevue/button";

export default {
	name: "InputTable",
	props: {
		question: String,
		value: Array,
		columns: Array
	},
	components: {
		Dialog,
		Textarea,
		Button
	},
	data() {
		return {
			productDialog: false,
			deleteProductDialog: false,
			deleteProductsDialog: false,
			selectedRow: {},
			filters: {},
			submitted: false,
			includeOptions: [
				{ name: "Include", value: true },
				{ name: "Exclude", value: false }
			],
			typeOptions: [
				{ name: "Primary", value: true },
				{ name: "Secondary", value: false }
			]
		};
	},
	methods: {
		newRow() {
			this.value.push({});
			this.$emit("input", this.value);
			const lastIndex = this.value.length - 1;
			// Wait until next tick so component is rendered
			this.$nextTick(() => {
				this.$refs[lastIndex][0].$el.focus();
			});
		},
		update(index, original, field, event) {
			var newObj = original;
			newObj[field] = event;
			this.$set(this.value, index, newObj);
			this.$emit("input", this.value);
		},
		confirmDelete(row, index) {
			this.selectedRow = row;
			this.selectedRow.index = index;
			this.deleteProductDialog = true;
		},
		deleteProduct() {
			this.value.splice(this.selectedRow.index, 1);
			this.deleteProductDialog = false;
			this.$emit("input", this.value);
			this.selectedRow = {};
		}
	}
};
</script>

<style scoped>
table {
	border-collapse: collapse;
}

table,
th,
td {
	border: 1px solid black;
}
</style>
