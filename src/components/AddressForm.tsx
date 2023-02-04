import { FC } from "react";
import FormLayout from "./FormLayout";

type AddressData = {
	street: string;
	city: string;
	state: string;
	zip: string;
};
type Props = AddressData & {
	updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm: FC<Props> = ({ city, state, street, zip, updateFields }) => {
	return (
		<FormLayout title="Address">
			<label>Street</label>
			<input
				autoFocus
				required
				type="text"
				value={street}
				onChange={e => updateFields({ street: e.target.value })}
			/>
			<label>City</label>
			<input
				required
				type="text"
				value={city}
				onChange={e => updateFields({ city: e.target.value })}
			/>
			<label>State</label>
			<input
				required
				type="text"
				value={state}
				onChange={e => updateFields({ state: e.target.value })}
			/>
			<label>Zip</label>
			<input
				required
				type="text"
				value={zip}
				onChange={e => updateFields({ zip: e.target.value })}
			/>
		</FormLayout>
	);
};
export default AddressForm;
