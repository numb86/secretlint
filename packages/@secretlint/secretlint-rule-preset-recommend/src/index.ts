import { SecretLintRulePresetCreator } from "@secretlint/types";
import ruleAWS from "@secretlint/secretlint-rule-aws";
import rulePrivateKey from "@secretlint/secretlint-rule-privatekey";
import ruleNpm from "@secretlint/secretlint-rule-npm";

export const rules = [ruleAWS, rulePrivateKey, ruleNpm];
export type Options = {};

export const creator: SecretLintRulePresetCreator<Options> = {
    meta: {
        id: "@secretlint/secretlint-rule-preset-recommend",
        recommended: true,
        type: "preset"
    },
    create(context, _options) {
        rules.forEach(rule => {
            context.registerRule(rule);
        });
    }
};
export default creator;