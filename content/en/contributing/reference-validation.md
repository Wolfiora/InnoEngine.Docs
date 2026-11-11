---
title: Compare API references with current source
description: Check a selected reference batch against evaluated source without repeating SDK discovery for each project.
uid: contributing.reference-validation
kind: how-to
owners: [Inno.Tooling.Architecture]
contracts: [contributing.example-validation]
---
# Compare API references with current source

An API reference contains captured declarations and XML, not a promise that its source has remained unchanged. Compare the selected facts with the actual engine candidate before treating them as current. Website projection checks then ensure that pages present those same facts.

## Select one evaluated context

Use the explicit engine checkout, its selected SDK and prepared compile references. Group source manifests by their recorded configuration and target. Several projects in the same context share one SDK graph capture; different contexts require separate comparisons.

With the existing Build entry compiled:

```sh
dotnet entry/InnoEngine.Build/bin/Debug/net10.0/InnoEngine.Build.dll docs validate-api \
  --engine-root /work/InnoEngine \
  --dotnet /selected-sdk/dotnet \
  --reference /work/InnoEngine.Docs/reference/api/core-identity.json \
  --reference /work/InnoEngine.Docs/reference/api/input.json \
  --output /work/InnoEngine/artifacts/acceptance/source-reference-comparison.json
```

The command reads project identities from the selected manifests and checks them against the actual source inventory. It does not infer ownership from page titles or build a second project list. An explicitly captured empty public surface is valid; an empty required project selection is not.

## Interpret the differences

Comparison checks the complete selected symbol set, exact declarations, nullable/default/generic syntax, XML, constants, source ownership and type relationships. A missing overload, obsolete member or changed release requirement fails even when other signature hashes match.

Source line numbers and the retired Wiki page field do not define contracts. XML line endings are normalized across hosts; substantive XML text remains part of the comparison. An offset-only source edit therefore does not require rewriting every reference page.

Mixed target/configuration batches, duplicate owners or symbols, escaping/noncanonical source paths and unavailable compilations fail explicitly. Cancellation or a changing reference input does not replace the previous complete report. Preserve a first failure and record why a later comparison is necessary.

## Keep the result within its scope

The report identifies `SelectedSourceReferenceComparison`, selected manifests and their content identities, each project's symbol count and differences. It remains `Unverified` for overall source API certification: matching these facts does not validate executable examples, script projections, behavioral prose, other targets or the trustworthiness of a publication source.

The command requests source evaluation and extraction, not product builds, Native preparation, network fetching or example execution. A missing compile reference remains a prerequisite failure. Prepare it through its owning build; do not copy a differently configured DLL into place.

Publication additionally requires the exact engine/Docs input identities, trusted workflow evidence, complete required contexts, [example validation](example-validation.md), content checks and the verified website artifact. A manually changed status label cannot supply that evidence.
