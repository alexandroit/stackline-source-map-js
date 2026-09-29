# Upstream origin and triage

- Original package: `source-map-js@1.2.1`
- Repository: https://github.com/7rulnik/source-map-js
- Source commit: https://github.com/7rulnik/source-map-js/commit/428d49f6b1e1614f082b7706fa879a3d9c64f728
- Source directory: `.`
- npm tarball: https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz
- SHA512 integrity: `sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==`
- npm last-release age selects maintenance scope; it does not imply no ongoing source development.

## Reviewed issues

Primary-source snapshot: `2026-09-29T00:21:42.767424+00:00`. Most recently updated 100 open and 30 closed issue/PR entries; PRs removed. This is triage evidence, not a claim of exhaustive review.

Reject invalid indexed-map offsets and mappings outside the generated content before SourceNode line padding (upstream reports 76/77). The regression preserves valid indexed-map text.

- [76: Security Advisory: Event-loop denial of service in SourceNode via unvalidated section offset line](https://github.com/7rulnik/source-map-js/issues/76)
- [77: CVE-2026-93749 affects 1.2.1 with no fixed release available](https://github.com/7rulnik/source-map-js/issues/77)
- [43: Bug: RawSourceMap.version type should be number, not string](https://github.com/7rulnik/source-map-js/issues/43)
- [30: originalPositionFor has incorrect typing](https://github.com/7rulnik/source-map-js/issues/30)
- [14: Setup CI and automate release](https://github.com/7rulnik/source-map-js/issues/14)
- [9: Add info how to use it via yarn resolutions](https://github.com/7rulnik/source-map-js/issues/9)

The structured snapshot in `.stackline/issue-triage.json` also records recently closed reports. Issues for unrelated packages in shared monorepositories were qualified as outside this fork’s runtime scope. No maintainer was contacted.
