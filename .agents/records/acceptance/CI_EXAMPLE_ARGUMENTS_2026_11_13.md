# Example receipt argument regression

The Documentation run [43449119709](https://github.com/Wolfiora/InnoEngine.Docs/actions/runs/43449119709) compiled all 119 selected example groups successfully, then failed during receipt reconciliation. PowerShell unwrapped a single path emitted by an `if` expression into a string; splatting that value passed individual characters to Node. The reader attempted to open `a` instead of `artifacts/examples/compiled.json`.

Both optional argument lists now capture the complete conditional output as arrays: previous receipt selection and newly compiled receipt reconciliation. Empty selections pass no optional argument. The workflow also retains the compiler report with failure diagnostics; a diagnostic report alone is not trusted cross-run evidence.

Validation executed the actual YAML PowerShell bodies for both operations with and without a selected path. The original bodies reproduced the character-splitting defect. All 41 workflow-boundary and example-evidence regression tests passed after correction; see ignored `artifacts/ci-example-arguments-functional.log`. No engine products, Native preparation, benchmarks, or stress checks were run locally for this change.

The new hosted run remains the authority for PR validation. This repair does not merge either PR or deploy the website.
