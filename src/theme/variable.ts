import { generate } from '@ant-design/colors'

interface Opts {
  theme?: 'dark' | 'default';
  backgroundColor?: string;
}

// const themeModes = {
//   light: undefined,
//   dark: {
//     theme: 'dark',
//     backgroundColor: '#2d8cf0',
//   }
// }

// 获取品牌色系
export const getBrandColors = (color: string) => {
  const options: Opts = {
    theme: 'dark',
    backgroundColor: '#2d8cf0',
  }
  return generate(color, options)
}
