import { FC } from "react";
import FormLayout from "./FormLayout";

type AccountData = {
	email: string;
	password: string;
};
type Props = AccountData & {
	updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm: FC<Props> = ({ email, password, updateFields }) => {
	return (
		<FormLayout title="Account Creation">
			<label>Email</label>
			<input
				autoFocus
				required
				type="email"
				value={email}
				onChange={e => updateFields({ email: e.target.value })}
			/>
			<label>Password</label>
			<input
				required
				type="password"
				value={password}
				onChange={e => updateFields({ password: e.target.value })}
			/>
		</FormLayout>
	);
};
export default AccountForm;
