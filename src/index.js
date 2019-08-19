import rtlCSSJS from 'rtl-css-js';

const defaultOpts = { pre: 'dir' };

const camelToDash = (str) => (
  str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2')
);

export const filterProps = (props, pre) => {
  const result = {};

  Object.entries(props).forEach((prop) => {
    if (prop[0].startsWith(pre)) {
      let key = prop[0].substring(pre.length);
      key = camelToDash(key).toLowerCase();
      result[key] = prop[1];
    }
  });

  return result;
};

export const direction = (props) => {
  const filtered = filterProps(props, defaultOpts.dir);

  return {
    '[dir="ltr"] &': {
      ...filtered,
    },
    '[dir="rtl"] &': {
      ...rtlCSSJS(filtered),
    },
  };
};
