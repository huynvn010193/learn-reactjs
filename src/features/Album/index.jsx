import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhạc Hoa Trịnh',
      thubnailUrl: 'https://photo-zmp3.zadn.vn/banner/c/b/c/c/cbcc8499d29e75f02fc824b29088950a.jpg',
    },
    {
      id: 2,
      name: 'Nhạc Phim',
      thubnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/f/717f8af12721cdaedc9ddad6460959f5.jpg',
    },
    {
      id: 3,
      name: 'Nhạc Vpop',
      thubnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/0/1/b/c01b58ccfdee5a9354f814addeb4badf.jpg',
    },
  ];
  return (
    <div>
      <h2>Danh sách Album</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
