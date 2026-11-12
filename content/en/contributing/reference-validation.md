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

For an entry whose complete SDK-selected C# source set contains no public type declarations, extraction can establish an empty authored surface without loading unrelated compiled dependencies. It still parses the selected language version, conditional symbols and generated `Compile` inputs; missing files or invalid syntax fail. Adding a public type restores the normal resolved-reference requirement. This narrower fact does not certify generators, a foreign-platform build or product execution.

## Compare a prepared snapshot

For coordinated validation, first [prepare an explicit documentation snapshot](documentation-queries.md). Supply its cache and exact identity, then use reference paths reported by its canonical catalog. The comparison reads the protected payloads even if the authoring checkout changes or is unavailable.

```sh
dotnet entry/InnoEngine.Build/bin/Debug/net10.0/InnoEngine.Build.dll docs validate-api \
  --engine-root /work/InnoEngine \
  --dotnet /selected-sdk/dotnet \
  --cache-root /work/InnoEngine.Docs/artifacts/documentation-query \
  --snapshot SNAPSHOT_ID \
  --reference reference/api/tooling-documentation.json \
  --project tools/Inno.Tooling.Documentation/Inno.Tooling.Documentation.csproj \
  --output /work/InnoEngine/artifacts/acceptance/documentation-api.json
```

Replace `SNAPSHOT_ID` with the complete identity returned by preparation. `--cache-root` and `--snapshot` are a pair; neither silently falls back to files or a mutable current pointer. Reports cannot be written into the documentation cache.

Use repeated `--project` options when only particular owners require comparison. Their paths must occur in the selected manifests and actual source inventory. Unrelated projects in the same manifest are not sent to SDK capture. Omitting this option compares all owners in the selected manifests; requesting an unknown owner fails rather than reducing required coverage silently.

## Interpret the differences

Comparison checks the complete selected symbol set, exact declarations, nullable/default/generic syntax, XML, constants, source ownership and type relationships. A missing overload, obsolete member or changed release requirement fails even when other signature hashes match.

Source line numbers and the retired Wiki page field do not define contracts. XML line endings are normalized across hosts; substantive XML text remains part of the comparison. An offset-only source edit therefore does not require rewriting every reference page.

Mixed target/configuration batches, duplicate owners or symbols, escaping/noncanonical source paths and unavailable compilations fail explicitly. Cancellation or a changing reference input does not replace the previous complete report. Preserve a first failure and record why a later comparison is necessary.

## Script declarations and actual compiler inputs

Runtime and Editor script references are compared as part of their corresponding [script example validation](example-validation.md). The same prepared logical DLLs compile the examples and supply the exact projected declarations. The report records each bound script manifest, the complete owner/symbol comparison, XML identity, and actual Runtime/Editor DLL hashes.

A compiling example cannot hide an obsolete or missing projected API reference: either failure prevents a passing result. CI also rejects a projection report describing different DLLs from those used by the examples. Source certification requires these comparisons for every bound script surface, alongside the host-source checks; it does not infer a script API from the host's namespace names.

Unchanged projection evidence can be reused only with a trusted prior certificate, matching reference content, compiler/source/dependency inputs and environment. Changing a report label supplies none of those requirements.

## Keep the result within its scope

The source comparison report identifies `SelectedSourceReferenceComparison`, selected manifests and their content identities, each project's reference identity, symbol count and differences. Prepared input adds the exact documentation snapshot and its bound source tree. It remains `Unverified` for overall source API certification: matching these facts does not validate executable examples, script projections, behavioral prose, other targets or the trustworthiness of a publication source.

The command requests source evaluation and extraction, not product builds, Native preparation, network fetching or example execution. Reference resolution uses a design-time execution context, so inspecting already prepared metadata cannot start Task-host or product preparation. A missing reference needed for a nonempty public surface remains a prerequisite failure. Prepare it through its owning build; do not copy a differently configured DLL into place.

Publication additionally requires the exact engine/Docs input identities, trusted workflow evidence, complete required contexts, [example validation](example-validation.md), content checks and the verified website artifact. A manually changed status label cannot supply that evidence.
